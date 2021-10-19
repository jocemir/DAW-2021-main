#!/usr/bin/python3
import smtplib
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login("veigas.jocemir@gmail.com", "88304918oculto")
msg = "Hello World!"
server.sendmail("veigas.jocemir@gmail.com", "jocemirveigas@hotmail.com", msg)
server.quit()