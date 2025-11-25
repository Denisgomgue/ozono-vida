# Solución al Error 400 de EmailJS

## 🔴 El Error

Si ves este error en la consola:

```
api.emailjs.com/api/v1.0/email/send:1 Failed to load resource: the server responded with a status of 400 ()
```

Significa que **faltan o son incorrectos** el Service ID o Template ID en tu archivo `.env.local`.

## ✅ Solución Rápida

### Paso 1: Verifica tu archivo `.env.local`

Asegúrate de que tu archivo `.env.local` en la raíz del proyecto tenga estas 3 variables:

```env
NEXT_PUBLIC_PUBLICK_KEY_EMAILJS=eCOV2v8D0D97snkyp
NEXT_PUBLIC_SERVICE_ID_EMAILJS=service_xxxxxxx
NEXT_PUBLIC_TEMPLATE_ID_EMAILJS=template_xxxxxxx
```

**⚠️ IMPORTANTE:**

- Reemplaza `service_xxxxxxx` con tu Service ID real de EmailJS
- Reemplaza `template_xxxxxxx` con tu Template ID real de EmailJS

### Paso 2: Obtener el Service ID

1. Ve a https://www.emailjs.com/
2. Inicia sesión en tu cuenta
3. Ve a **"Email Services"** en el menú lateral
4. Si ya tienes un servicio configurado, verás el **Service ID** (ejemplo: `service_abc123`)
5. Si no tienes uno, crea uno nuevo:
   - Haz clic en **"Add New Service"**
   - Selecciona **"Gmail"**
   - Conecta tu cuenta de Gmail
   - Copia el **Service ID** que aparece

### Paso 3: Obtener el Template ID

1. En EmailJS, ve a **"Email Templates"** en el menú lateral
2. Si ya tienes un template, verás el **Template ID** (ejemplo: `template_xyz789`)
3. Si no tienes uno, crea uno nuevo:
   - Haz clic en **"Create New Template"**
   - Configura el template con los campos que necesitas
   - Guarda el template
   - Copia el **Template ID** que aparece en la parte superior

### Paso 4: Actualizar `.env.local`

Actualiza tu archivo `.env.local` con los valores reales:

```env
NEXT_PUBLIC_PUBLICK_KEY_EMAILJS=eCOV2v8D0D97snkyp
NEXT_PUBLIC_SERVICE_ID_EMAILJS=service_abc123
NEXT_PUBLIC_TEMPLATE_ID_EMAILJS=template_xyz789
```

### Paso 5: Reiniciar el servidor

**MUY IMPORTANTE:** Después de actualizar `.env.local`, debes:

1. Detener el servidor (Ctrl+C)
2. Reiniciarlo con `npm run dev`

Las variables de entorno solo se cargan al iniciar el servidor.

## 🔍 Verificar la Configuración

Después de reiniciar, cuando envíes el formulario, revisa la consola del navegador. Deberías ver:

```
EmailJS Config: {
  publicKey: "✓ Configurado",
  serviceId: "✓ service_abc...",
  templateId: "✓ template_xyz..."
}
```

Si ves `✗ Faltante` en alguno de estos valores, significa que esa variable no está configurada correctamente.

## 📋 Checklist

- [ ] Archivo `.env.local` existe en la raíz del proyecto
- [ ] `NEXT_PUBLIC_PUBLICK_KEY_EMAILJS` está configurado
- [ ] `NEXT_PUBLIC_SERVICE_ID_EMAILJS` está configurado con un valor real (no `service_xxxxxxx`)
- [ ] `NEXT_PUBLIC_TEMPLATE_ID_EMAILJS` está configurado con un valor real (no `template_xxxxxxx`)
- [ ] El servidor fue reiniciado después de actualizar `.env.local`
- [ ] El template en EmailJS tiene los campos correctos: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{date}}`, `{{message}}`

## 🆘 Si el error persiste

1. Verifica que los IDs sean correctos (sin espacios, sin comillas)
2. Asegúrate de que el template en EmailJS tenga configurado el email de destino
3. Revisa la consola del navegador para ver los logs de depuración
4. Verifica que el servicio de email en EmailJS esté activo y conectado
