from datetime import datetime


def SaveMessage(name, cname,email,nr,msg):
    dt = str(datetime.now())

    pth = "../db/tekniliko/" + dt + ".txt"
    f = open(pth, "w")

    f.write(str(name))
    f.write("\n")

    f.write(str(cname))
    f.write("\n")

    f.write(str(email))
    f.write("\n")

    f.write(str(nr))

    f.write("\n")
    f.write(str(msg))
    f.close()

