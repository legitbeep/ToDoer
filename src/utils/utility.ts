export const cutPara = (para: string ,length: number) => {
    const words: string[] = para.split(" ");
    let newPara: string | string[] = words.slice(length);
    newPara = newPara.join(" ");
    newPara += "...";
    return newPara
}   