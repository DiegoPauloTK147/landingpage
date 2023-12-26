@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --bg-color: #000;
    --primary-color: #FFFFFF;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    background-color: var(--bg-color) ;
}

.logo__ajust {
    width: 50%;
    text-align: center;
    align-items: center;
    padding: 20px;
}

.container {
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    gap: 2.5rem;
}

.paragrafo {
    color: #FFFFFF;
    font-size: 1.4rem;
}

.title {
    font-size: 40px;
    text-align: center;
    user-select: none;
    color: var(--primary-color);
}

.row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
}
.inputbox {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    height: 2.5rem;
}

.inputbox label {
    position: relative;
    top:0;
    left: 10px;
    font-size: 20px;
    color: var(--primary-color);
    transition: .5s;
    cursor: text;
}

.inputbox input {
    position: absolute;
    background-color: var(--primary-color);
    width: 100%;
    height: 2px;
    bottom: 0;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: .5s;
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px;
}

.inputbox input:focus,
.inputbox input:valid {
    height: 100%;
}

.inputbox input:focus + label,
.inputbox input:valid + label {
    top: -40px;
    left: 0;
}

.container button {
    justify-self: center;
    width: 200px;
    height: 50px;
    border:none;
    outline: none;
    cursor: pointer;
    background-color: var(--primary-color);
    font-size: 20px;
    font-weight: bold;
    border-radius: 2px;
}

footer {
    color: var(--primary-color);
    padding: 20px;
    align-items: center;
    text-align: center;
}

.final{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: aliceblue;
    align-items: center;
    text-align: center;
    padding: 0px;
}

.logo__rem{
    width: 300px;
}

.final__botão {
    background-color: green;
    padding: 10px;
    border-radius: 10px;


}

@media screen and (max-width:p 1400x) {
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
        background-color: var(--bg-color);
        }
    .container {
            flex-grow: 3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 95%;
            gap: 2.5rem;
        }
    .logo__ajust {
            width: 80%;
            text-align: center;
            align-items: center;
            padding: 20px;x
        }
}
