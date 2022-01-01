/**
 * MASCARA CEP
 * @param element
 * @returns {*}
 * @constructor
 */
export function Cep(element) {
    let value = element.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    element.target.maxLength = 9;
    element.target.value = value;
    return element;
}

/**
 * MASCARA REAL
 * @param element
 * @returns {*}
 * @constructor
 */
export function Real(element) {
    let value = element.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
    element.target.value = value;
    return element;
}