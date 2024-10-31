.game{
    padding: 5px 18px;
}

.breadcrumb{
    margin-top: 10px;
    display: flex;
    font-size: 12px;
    font-family: 'Roboto';
    font-weight: 500;
    color: var(--colorBlancos);
}
.breadcrumb a{
    color: var(--colorBlancos);
    text-decoration: none;
    transition: color 0.3s;
}

.breadcrumb a:hover{
    color: var(--colorPrimarioLuz1);
}

.title{
    margin: 25px 0px;
    height: 60px;
    padding-left: 75px;
    color: var(--colorBlancos);
}

.title h3{
    border-bottom: 1px solid white;
    width: 190px;
    height: 50%;
}

.title ul li a{
    color: var(--colorBlancos);
}

.game-Container{
    display: flex;
    justify-content: center;
    align-items: center;
}
canvas{
   
    width: 900px;
    height: 500px;
    background-color: aqua;
}

.gameInfoContainer{
    margin-top: 30px;
    width: 79%;
    display: flex;
    height: 175px;
    justify-content: space-between;
    margin-left:5%;
}

.instructions{
    margin-top: 20px;
    width: 70%;
    margin: 3% 15%;
    display: flex;
    justify-content: space-around;
    padding: 10px;
}

.boxInstructions{
    width: 50%;
    background-color: var(--colorSecundarioLuz2);
    padding: 10px;
}

iframe{
    width: 27%;
    height: 100%;
}

.instructions p{
    color: var(--colorBlancos);
    font-size: 14px;
}

.instructions h5{
    color: var(--colorBlancos);
    font-size: 26px;
}

.title ul{
    display: flex;
    text-decoration: none;
    list-style: none;
}