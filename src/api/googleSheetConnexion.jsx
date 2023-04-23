import React,  { useState } from 'react'
// import { configHitters } from "config"
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { Gaxios } from 'gaxios'
// import env from 'react-dotenv'

const doc = new GoogleSpreadsheet("1kB5MFfJJGQLSa2DkHRD8Gn2TiWZNhJzn4vzIwikBVeg")

const googleSheetConnexion = async () => {

    await doc.useServiceAccountAuth({
      client_email: "baseball-players-stats@baseball-players-stats.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPZoKZZ8KVSIoV\nsY/5/Wj+jO6AIMN92Taz4BRbxmLBDRFVPQA4lqHd/DLoqsGMpEDRNyK+CK+0Dpvs\nOHAMEdtJSLqKzS0k3Xf+Rhrv8WbZfe53SY7F5rEtQbCXxzRrHudPqveJSuyFbkLz\nC85xibuR6krGqIIzAbUCGVaMgU9FevU2f/TENmcatFk4JZ8hvjv7WFJSbPq2vJuy\n4XoMMi5iB157uFuHsLAtyMpbUc+gruBaoeI4E89dnsApC7eFUUWdKtiuYqT9/lf+\nBxt8eCrbtREOOrRwLf+Br5U0Qc+Q1cz0UFfrIsJYvuH3pHsmOYWXOe7riOFQPSAu\ng1kNWubTAgMBAAECggEANNIjwtQlP4Xo/Rtq0r1SZzoXZ/RwNXYDs44HQVRmREqC\ntpXBn6flc7bOdGlAwAP5Kg+DvqhRr2blGSVKjBhkI+bs83rL2464B79tDt0JV6z1\n9dV7EjXtu9v2EMHAPOPy/1xIjOPTFyx8yo+gNVRhvAjSoIO8HSd7JRy06TXprYTs\nzA7FsbHJLKfh8YZUJ6WALCDNfzI87pf64RC8zpF2Frts4xcyq9pQbdeJWzaLeXS6\nLiwzZbXaHLX5tJrSqnf+tmay5rXGuSlM9tjzq2KzXg4IiMDls7HeOrAiom5XEzx7\nB6syGkoY2POYYqq0Agyqcd+MiIyKiSaMEheur5nmOQKBgQDuiEkSc74yVGoSNhXy\nuTTad/S9a7X4HV9Z3Kjf8Uz2lmM2/Gr9Mbso08RnzeKJBGNtN/hwN4hqqBL4q659\nDWFxxiPAW+zP9HzcVBTSmNTbMnoKpW0pYVlwuSacouqnx5eZTwZMYBlfaxTg8euQ\n23ZekMWbFI+Asd16iRPI0RKqnwKBgQDelpngc4oPppoN7jm77i2yCpcjGKClXUXc\nLa6YnNTbpOfoBbg+neh07cPLlpe9wMeg63DPZOj0nQEmzdUeSfHNozIU6TAZy+zI\ndPypDQNb62f8YcGeb4KEnw562h4nMcaMika4Z+UoK1RuKSadYLM5c+dWhbbfS/Kz\nXROmBp9LTQKBgQCF2EdYaUXiK+fRDDRInJABvqm/2D6lWKX2YJEKB/Ztr3lAk2bd\naBhjEmD09lwVEjdQQ8XOAfs0DdeHXZ5tYSK6mrnY6Dv7fG7LmwqMGWHnFW3Rp32X\naJ6tV9dIsUoGl0KDrgoUtR/HoOh4SIcsI1lKOuYG3QSg7C0g4uYNGvPkdQKBgCtU\nugPduiSt1BOeKpMRHMgqE537b1qBu9XO9swyy6Uuhw69/k4CQ3xvxMvfNw7zdmk3\nLDDTfh4Qamb5buGEl5PmjxtPAdQjxKaJT55BMEQ2oXmaNiz3nDrhE9qKl5Adun8l\nc/r2DsAxHzCKxj+g0YL/sys+wIjbqhWMqwSJCX2JAoGAXVI2n8374M3a4bYvquEf\nRtOr+t+6JsrE0ThbEIUdMIAdNCdtBc63iCBqY3dm+uFSLfVEQMr1bmI23V1U9/Pt\nDKaHAALI3QbjGI5prbcjFQ8d40BJnOIQKwq8iSoMcgzzwRkjanRlhPgclE7xtK4f\nexhR2eHYXSxAA7RX5rBwozs=\n-----END PRIVATE KEY-----\n"
    })

    await doc.loadInfo()
    console.log(doc.title)
    

}

export default googleSheetConnexion