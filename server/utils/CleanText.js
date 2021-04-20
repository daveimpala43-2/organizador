export function cleanText(text){
    const cleanString = text.replace(/[|&;$%@"<>()+,]/g, "");
}
