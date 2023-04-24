export const charCounterWarn = (char:string) : number => {
    const charLacky= 255 - char.length;

    if(charLacky <= 0)
        return 0;

    return charLacky;
}
