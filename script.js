const LEEWAY = 2;

const form = document.getElementById("form-minimum-frame-size")
const result = document.getElementById("result-minimum-frame-size")
const clearButton = document.getElementById("button-clear")
const fSize = document.getElementById("frame-size")
const bridge = document.getElementById("bridge")
const pd = document.getElementById("pd")
const ed = document.getElementById("ed")

function calculateMinimumFrameSize(frameSize, bridge, pd, ed)
{
    return frameSize + bridge - pd + ed + LEEWAY;
}

form.addEventListener("submit", (event) =>
{
    event.preventDefault();
    let f = parseInt(fSize.value);
    let b = parseInt(bridge.value);
    let p = parseInt(pd.value);
    let e = parseInt(ed.value);
    console.log(f, b, p, e)

    if (f==="" || b==="" || p==="" || e==="")
    {
        result.textContent = "Cannot compute with empty value.";
    }
    else
    {
        result.textContent = calculateMinimumFrameSize(f, b, p, e) + "mm";
    }
});

clearButton.addEventListener('click', ()=>
{
    fSize.value = "";
    bridge.value="";
    pd.value="";
    ed.value="";
    result.textContent = "..."
});