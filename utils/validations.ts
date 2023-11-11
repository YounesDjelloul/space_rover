export function checkCommandValidity(commands: string) {
    const regex = /^(F|B|L|R)*$/;
    return regex.test(commands);
}