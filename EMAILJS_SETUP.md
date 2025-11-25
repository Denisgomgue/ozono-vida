# Configuración de EmailJS

## Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```
NEXT_PUBLIC_PUBLICK_KEY_EMAILJS=eCOV2v8D0D97snkyp
NEXT_PUBLIC_SERVICE_ID_EMAILJS=tu_service_id_aqui
NEXT_PUBLIC_TEMPLATE_ID_EMAILJS=tu_template_id_aqui
```

**IMPORTANTE:** Necesitas crear el Service ID y Template ID en EmailJS (ver pasos abajo). El error 400 que estás viendo significa que estos valores no están configurados correctamente.

## Pasos para Configurar EmailJS Completamente

### 1. Crear un Servicio de Email en EmailJS

1. Ve a tu cuenta de EmailJS: https://www.emailjs.com/
2. Ve a la sección **"Email Services"** en el menú lateral
3. Haz clic en **"Add New Service"**
4. Selecciona **"Gmail"** como proveedor
5. Conecta tu cuenta de Gmail siguiendo las instrucciones
6. Una vez conectado, verás el **Service ID** (algo como `service_xxxxxxx`)
7. **Copia este Service ID** y úsalo como valor de `NEXT_PUBLIC_SERVICE_ID_EMAILJS` en tu `.env.local`

### 2. Crear un Template de Email

1. Ve a la sección **"Email Templates"** en el menú lateral de EmailJS
2. Haz clic en **"Create New Template"**
3. Configura el template con los siguientes campos:

**Asunto del Email:**

```
Nueva Solicitud de Cita - {{service}}
```

**Contenido del Email:**

```
Hola,

Has recibido una nueva solicitud de cita:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio: {{service}}
Fecha Preferida: {{date}}
Mensaje: {{message}}

---
Este email fue enviado desde el formulario de contacto de Ozono Vida.
```

**Configuración adicional:**

- **To Email:** `ozonovidahuaraz@gmail.com` (o tu email de destino)
- **From Name:** `{{from_name}}`
- **Reply To:** `{{reply_to}}`

4. Guarda el template
5. **Copia el Template ID** (algo como `template_xxxxxxx`) que aparece en la parte superior
6. Úsalo como valor de `NEXT_PUBLIC_TEMPLATE_ID_EMAILJS` en tu `.env.local`

### 3. Actualizar Variables de Entorno

Actualiza el archivo `.env.local` con el Service ID y Template ID que copiaste:

```env
NEXT_PUBLIC_PUBLICK_KEY_EMAILJS=eCOV2v8D0D97snkyp
NEXT_PUBLIC_SERVICE_ID_EMAILJS=service_xxxxxxx
NEXT_PUBLIC_TEMPLATE_ID_EMAILJS=template_xxxxxxx
```

**Ejemplo real:**

```env
NEXT_PUBLIC_PUBLICK_KEY_EMAILJS=eCOV2v8D0D97snkyp
NEXT_PUBLIC_SERVICE_ID_EMAILJS=service_gmail123
NEXT_PUBLIC_TEMPLATE_ID_EMAILJS=template_abc456
```

**Nota:** Reemplaza `service_xxxxxxx` y `template_xxxxxxx` con los valores reales que obtuviste de EmailJS.

### 4. Reiniciar el Servidor de Desarrollo

Después de actualizar las variables de entorno, reinicia el servidor:

```bash
npm run dev
```

## Formularios Implementados

Los siguientes formularios están configurados para enviar emails a través de EmailJS:

1. **Página de Reservar Cita** (`/reservar-cita`)
2. **Modal de Reserva** (componente `AppointmentModal`)

Ambos formularios envían los datos a: `ozonovidahuaraz@gmail.com`

## Estructura de Datos Enviados

Los siguientes campos se envían en cada solicitud:

- `from_name`: Nombre completo del paciente
- `from_email`: Email del paciente (opcional)
- `phone`: Teléfono del paciente
- `service`: Servicio de interés
- `date`: Fecha preferida para la cita
- `message`: Mensaje adicional (opcional)
- `to_email`: Email de destino (ozonovidahuaraz@gmail.com)
- `reply_to`: Email para responder (email del paciente si está disponible)
