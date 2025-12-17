import { transport } from "../config/nodemailer"



 type EmailType = {
    name: string
    email: string
    token: string
 }

export class AuthEmail {
static sendConfirmationEmail = async (user: EmailType) => {
    const email = await transport.sendMail({
        from: 'CashTracker <admin@cashtracker.com>',
        to: user.email,
        subject: 'Cahstracker - Confirma tu cuenta',
        html: `
            <p>Hola: ${user.name}, has creado tu cuenta en cashtracker, ya esta casi lista</p>
            <p>Visita el siguiente enlace:</p>
            <a href:"#">Confirmar tu cuenta</a>
            <p> e  ingresa el código: <b>${user.token}</b></p>
        `
    })
}

static sendPasswordResetToken = async (user: EmailType) => {
    const email = await transport.sendMail({
        from: 'CashTracker <admin@cashtracker.com>',
        to: user.email,
        subject: 'Cahstracker - Restablece tu password',
        html: `
            <p>Hola: ${user.name}, has solicitado restablecer tu password</p>
            <p>Visita el siguiente enlace:</p>
            <a href:"#">Restablece tu password</a>
            <p> e  ingresa el código: <b>${user.token}</b></p>
        `
    })

    console.log('Mensaje enviado', email.messageId)
}
}