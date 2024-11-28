export const validateGmail = (req, res, next) => {
    const { email } = req.body;
  
    // Verificar si el correo existe y tiene el dominio @gmail.com
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  
    if (!email) {
      return res.status(400).json({ message: 'El campo email es obligatorio' });
    }
  
    if (!gmailRegex.test(email)) {
      return res.status(400).json({ message: 'El email debe ser un correo de Gmail válido' });
    }
  
    // Si todo está bien, pasa al siguiente middleware o controlador
    next();
  };
  