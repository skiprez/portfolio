//! Copy text from contact info!
var copyTextM = document.getElementById("mail").innerHTML;
const copyMail = async () => {
    try {
        await navigator.clipboard.writeText(copyTextM);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

var copyTextN = document.getElementById("number").innerHTML;
const copyNumber = async () => {
    try {
        await navigator.clipboard.writeText(copyTextN);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

var copyTextD = document.getElementById("discord").innerHTML;
const copyDc = async () => {
    try {
        await navigator.clipboard.writeText(copyTextD);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

// TODO: create education slides