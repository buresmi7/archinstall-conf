export const convertFileLinesToArrayOfEchos = async (filePath: string, outputFilePath: string): Promise<string[]> => {
    const lines = (await Deno.readTextFile(filePath, 'utf-8')).split('\n');
    return lines.map((line) => `echo '${line}' >> ${outputFilePath}`);
}