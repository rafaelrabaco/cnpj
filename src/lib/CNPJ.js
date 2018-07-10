import axios from "axios";

export const info = (cnpj, options) => 
{
    cnpj = clear(cnpj);
    let headers = {};
    if (typeof options !== "undefined" && options["token"])
        headers = { Authorization: `Bearer ${options["token"]}` };

    return axios({
        method: "get",
        url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
        headers: headers,
        timeout:
            typeof options !== "undefined" && options["timeout"]
                ? options["timeout"]
                : 3000
    })
        .then(response => response.data)
        .catch(() => 
        {
            return {
                status: "UNAVAILABLE",
                message: "Sistema indisponível no momento"
            };
        });
};

export const validate = cnpj => 
{
    let value = clear(cnpj);
    if (value.length !== 14 || /^(\d)\1+$/.test(value)) return false;

    let length = value.length - 2;
    let numbers = value.substring(0, length);
    let digits = value.substring(length);
    let summ = 0;

    let pos = length - 7;

    for (let i = length; i >= 1; i--) 
    {
        summ += numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let result = summ % 11 < 2 ? 0 : 11 - (summ % 11);
    if (result != digits.charAt(0)) return false;

    length = length + 1;
    numbers = value.substring(0, length);
    summ = 0;
    pos = length - 7;

    for (let i = length; i >= 1; i--) 
    {
        summ += numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
    }
    result = summ % 11 < 2 ? 0 : 11 - (summ % 11);

    if (result != digits.charAt(1)) return false;

    return true;
};

export const format = cnpj => 
{
    let value = clear(cnpj);
    return value.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        "$1.$2.$3/$4-$5"
    );
};

export const clear = cnpj => cnpj.replace(/\D/g, "");
