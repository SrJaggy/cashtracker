



 type EmailType = {
    name: string
    pass: string
    token: string
 }
export class AuthEmail {
static sendConfirmationEmail = async (user) => {
    console.log(user)
}
}