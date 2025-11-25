# Configuración Correcta del Template en EmailJS

## 🔴 Problema Actual

El correo está llegando con la configuración incorrecta:

- **De:** Denis gg <gomezggdenis@gmail.com> ❌ (debería ser de la clínica)
- **Para:** gomezggdenis@gmail.com ❌ (debería ser ozonovidahuaraz@gmail.com)
- **Asunto:** Cliente: Denis gg ❌ (debería ser "🏥 Nueva Reserva de Cita - OZONO VIDA")

## ✅ Solución: Configurar el Template Correctamente

### Paso 1: Editar el Template en EmailJS

1. Ve a https://www.emailjs.com/
2. Ve a **"Email Templates"**
3. Haz clic en tu template `template_m8t4yjf`
4. Haz clic en **"Edit"**

### Paso 2: Configurar los Campos del Email

En la sección **"Email Settings"**, configura lo siguiente:

#### **To Email** (Destinatario)

```
ozonovidahuaraz@gmail.com
```

⚠️ **IMPORTANTE:** Debe ser el email de la clínica, NO el email del paciente.

#### **From Name** (Nombre del Remitente)

```
Ozono Vida
```

O puedes dejarlo vacío para usar el email por defecto de Gmail.

#### **From Email** (Email del Remitente)

```
(Dejar vacío o usar el email por defecto de tu cuenta de Gmail)
```

O puedes poner:

```
ozonovidahuaraz@gmail.com
```

#### **Reply To** (Responder a)

```
{{from_email}}
```

✅ Esto está correcto - permite responder directamente al paciente.

#### **Subject** (Asunto)

```
🏥 Nueva Reserva de Cita - OZONO VIDA
```

O si quieres incluir el nombre del paciente:

```
🏥 Nueva Reserva de Cita - {{from_name}}
```

### Paso 3: Configurar el Contenido del Email

En el campo **"Content"**, usa este template:

```
🏥 Nueva Reserva de Cita - OZONO VIDA

Hola,

Has recibido una nueva solicitud de reserva de cita:

👤 Información del Paciente
📝 Nombre: {{from_name}}

📞 Teléfono: {{phone}}

📧 Email: {{from_email}}

🏥 Servicio solicitado: {{service}}

📅 Fecha preferida: {{date}}

{{#message}}
💬 Mensaje adicional:

{{message}}
{{/message}}

📞 Contactar al paciente:

• Teléfono: {{phone}}
• Email: {{from_email}}

Por favor contacta al paciente lo antes posible.

---
Este email fue enviado automáticamente desde el sistema de reservas de OZONO VIDA.
```

### Paso 4: Guardar el Template

1. Haz clic en **"Save"**
2. Verifica que todos los campos estén correctos

## 📋 Resumen de Configuración Correcta

| Campo          | Valor Correcto                          |
| -------------- | --------------------------------------- |
| **To Email**   | `ozonovidahuaraz@gmail.com`             |
| **From Name**  | `Ozono Vida` (o vacío)                  |
| **From Email** | (vacío o `ozonovidahuaraz@gmail.com`)   |
| **Reply To**   | `{{from_email}}`                        |
| **Subject**    | `🏥 Nueva Reserva de Cita - OZONO VIDA` |

## ✅ Resultado Esperado

Después de esta configuración, los correos llegarán así:

- **De:** Ozono Vida <tu-email-gmail@gmail.com> ✅
- **Para:** ozonovidahuaraz@gmail.com ✅
- **Responder a:** gomezggdenis@gmail.com (email del paciente) ✅
- **Asunto:** 🏥 Nueva Reserva de Cita - OZONO VIDA ✅

## 🔍 Verificar

1. Guarda el template en EmailJS
2. Prueba enviando un formulario desde tu aplicación
3. Verifica que el correo llegue correctamente configurado
