/**
 * 字符串裁剪
 * @param text 
 * @param start 
 * @param end 
 */

function trimStr(text: string, start = 0, end = 0) {
    return text.substring(start, end);
}

export default trimStr;