# Script para actualizar todas las páginas de tratamientos
# Reemplaza enlaces /reservar-cita con AppointmentButton

$files = @(
    "src/app/tratamientos/page.tsx",
    "src/app/tratamientos/ginecologia/post-cesarea/page.tsx",
    "src/app/tratamientos/ginecologia/endometriosis/page.tsx",
    "src/app/tratamientos/ginecologia/vph/page.tsx",
    "src/app/tratamientos/ginecologia/vaginitis/page.tsx",
    "src/app/tratamientos/ginecologia/candidiasis/page.tsx",
    "src/app/tratamientos/ginecologia/page.tsx",
    "src/app/tratamientos/infecciones/ulceras-varicosas/page.tsx",
    "src/app/tratamientos/infecciones/pie-diabetico/page.tsx",
    "src/app/tratamientos/infecciones/heridas-infectadas/page.tsx",
    "src/app/tratamientos/infecciones/page.tsx",
    "src/app/tratamientos/estetica/acne/page.tsx",
    "src/app/tratamientos/estetica/ulceras-cronicas/page.tsx",
    "src/app/tratamientos/estetica/celulitis/page.tsx",
    "src/app/tratamientos/estetica/rejuvenecimiento-facial/page.tsx",
    "src/app/tratamientos/estetica/page.tsx",
    "src/app/tratamientos/enfermedades/page.tsx",
    "src/app/tratamientos/enfermedades/diabetes/page.tsx",
    "src/app/tratamientos/enfermedades/lupus-eritematoso/page.tsx",
    "src/app/tratamientos/enfermedades/cefaleas-migranas/page.tsx",
    "src/app/tratamientos/enfermedades/gota/page.tsx",
    "src/app/tratamientos/enfermedades/prostatitis/page.tsx",
    "src/app/tratamientos/enfermedades/gastritis/page.tsx",
    "src/app/tratamientos/enfermedades/varices/page.tsx",
    "src/app/tratamientos/enfermedades/enfermedad-de-crohn/page.tsx",
    "src/app/tratamientos/enfermedades/colitis/page.tsx",
    "src/app/tratamientos/enfermedades/insuficiencia-vascular/page.tsx",
    "src/app/tratamientos/enfermedades/hepatitis/page.tsx",
    "src/app/tratamientos/dolor/page.tsx",
    "src/app/tratamientos/dolor/tunel-carpiano/page.tsx",
    "src/app/tratamientos/dolor/lumbalgia/page.tsx",
    "src/app/tratamientos/dolor/espolon-calcaneo/page.tsx",
    "src/app/tratamientos/dolor/ciatalgia/page.tsx",
    "src/app/tratamientos/dolor/escoliosis/page.tsx",
    "src/app/tratamientos/dolor/fascitis-plantar/page.tsx",
    "src/app/tratamientos/dolor/fibromialgia/page.tsx",
    "src/app/tratamientos/dolor/tendinitis/page.tsx",
    "src/app/tratamientos/dolor/cervicalgia/page.tsx",
    "src/app/tratamientos/dolor/hernias-discales/page.tsx",
    "src/app/tratamientos/dolor/artrosis/page.tsx",
    "src/app/tratamientos/dolor/artrosis/hombro/page.tsx",
    "src/app/tratamientos/dolor/artrosis/rodilla/page.tsx",
    "src/app/tratamientos/dolor/artrosis/cadera/page.tsx",
    "src/app/tratamientos/dolor/dolores/muslo/page.tsx",
    "src/app/tratamientos/dolor/dolores/tobillos/page.tsx",
    "src/app/tratamientos/dolor/dolores/pies/page.tsx",
    "src/app/tratamientos/dolor/dolores/plantas-de-los-pies/page.tsx",
    "src/app/tratamientos/dolor/dolores/manos/page.tsx",
    "src/app/tratamientos/dolor/dolores/codo/page.tsx",
    "src/app/tratamientos/dolor/dolores/columnas/page.tsx",
    "src/app/tratamientos/dolor/dolores/cadera/page.tsx",
    "src/app/tratamientos/dolor/dolores/hombros/page.tsx",
    "src/app/tratamientos/dolor/dolores/espalda/page.tsx",
    "src/app/tratamientos/dolor/dolores/rodillas/page.tsx",
    "src/app/tratamientos/dolor/dolores/page.tsx",
    "src/app/tratamientos/dolor/dolores/cuello/page.tsx",
    "src/app/tratamientos/dolor/dolores/cabeza/page.tsx"
)

Write-Host "Iniciando actualización de páginas de tratamientos..." -ForegroundColor Green

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Procesando: $file" -ForegroundColor Yellow
        
        # Leer el contenido del archivo
        $content = Get-Content $file -Raw
        
        # Verificar si ya tiene los imports necesarios
        if ($content -notmatch "AppointmentButton") {
            # Agregar imports si no existen
            $content = $content -replace "(import.*from.*Breadcrumbs.*;)", "`$1`nimport { AppointmentButton } from '@/components/ui/AppointmentButton';`nimport { CTASection } from '@/components/ui/CTASection';`nimport { ContactInfoSection } from '@/components/ui/ContactInfoSection';"
        }
        
        # Reemplazar enlaces simples de reservar-cita
        $content = $content -replace '<Link href="/reservar-cita"[^>]*>.*?Reservar Cita.*?</Link>', '<AppointmentButton variant="white" size="lg" />'
        
        # Reemplazar botones más complejos
        $content = $content -replace '<Link\s+href="/reservar-cita"[^>]*className="[^"]*"[^>]*>.*?<Calendar[^>]*>.*?</Calendar>.*?<span>Reservar Cita</span>.*?</Link>', '<AppointmentButton variant="white" size="lg" />'
        
        # Guardar el archivo
        Set-Content $file $content -Encoding UTF8
        Write-Host "✓ Actualizado: $file" -ForegroundColor Green
    } else {
        Write-Host "✗ Archivo no encontrado: $file" -ForegroundColor Red
    }
}

Write-Host "`nActualización completada!" -ForegroundColor Green
