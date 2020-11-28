<script>
    export let hideTotal = true;
    import TrashCanOutline from 'svelte-material-icons/TrashCanOutline.svelte';
    import Plus from 'svelte-material-icons/Plus.svelte'
    import Minus from 'svelte-material-icons/Minus.svelte';
    import Up from 'svelte-material-icons/ChevronUpCircle.svelte'
    import Down from 'svelte-material-icons/ChevronDownCircle.svelte'


    let listSnacks;
    let hideControl = true;
    let ListItem = ["item", "item", "item", "item", "item"];
    $: itemLength = ListItem.length;

    $: itemLength > 3 ? hideControl = false : hideControl = true;

    const goDown = () => {
        verticalScroll(listSnacks,'down',30,80,10);
    }

    const goUp = () => {
        verticalScroll(listSnacks,'up',30,80,10);
    }

    const verticalScroll = (element,direction,speed,distance,step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(function(){
        if(direction == 'up'){
            element.scrollTop -= step;
        } else {
            element.scrollTop += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
</script>

<div class:hidden={hideTotal} id="snacks-wrapper">
    <h1>Keranjang</h1>
    <div id="list-snacks" bind:this={listSnacks}>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">60.000</div>
                    <div class="snack-title">Lapangan <span>2 Jam</span></div>
                </div>
            </div>
                <i class="trash-wrapper"><TrashCanOutline size={"2rem"}/></i>
        </div>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">5.000</div>
                    <div class="snack-title">Aqua Besar</div>
                </div>
            </div>
            <div class="right">
                <i class="decrease"><Minus size={"2rem"}/></i>
                <p>1</p>
                <i class="increase"><Plus size={"2rem"}/></i>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">5.000</div>
                    <div class="snack-title">Aqua Besar</div>
                </div>
            </div>
            <div class="right">
                <i class="decrease"><Minus size={"2rem"}/></i>
                <p>1</p>
                <i class="increase"><Plus size={"2rem"}/></i>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">5.000</div>
                    <div class="snack-title">Aqua Besar</div>
                </div>
            </div>
            <div class="right">
                <i class="decrease"><Minus size={"2rem"}/></i>
                <p>1</p>
                <i class="increase"><Plus size={"2rem"}/></i>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">5.000</div>
                    <div class="snack-title">Aqua Besar</div>
                </div>
            </div>
            <div class="right">
                <i class="decrease"><Minus size={"2rem"}/></i>
                <p>1</p>
                <i class="increase"><Plus size={"2rem"}/></i>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">5.000</div>
                    <div class="snack-title">Aqua Besar</div>
                </div>
            </div>
            <div class="right">
                <i class="decrease"><Minus size={"2rem"}/></i>
                <p>1</p>
                <i class="increase"><Plus size={"2rem"}/></i>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">5.000</div>
                    <div class="snack-title">Aqua Besar</div>
                </div>
            </div>
            <div class="right">
                <i class="decrease"><Minus size={"2rem"}/></i>
                <p>1</p>
                <i class="increase"><Plus size={"2rem"}/></i>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <img src="assets/img/tea.svg" alt="tea">
                <div class="info">
                    <div class="snack-price">5.000</div>
                    <div class="snack-title">Aqua Besar</div>
                </div>
            </div>
            <div class="right">
                <i class="decrease"><Minus size={"2rem"}/></i>
                <p>1</p>
                <i class="increase"><Plus size={"2rem"}/></i>
            </div>
        </div>

    </div>
    <i on:click={goUp} class="up"  class:hidden={hideControl}><Up size={"3rem"}/></i>
    <i on:click={goDown} class="down" class:hidden={hideControl}><Down size={"3rem"}/></i>
</div>


<div id="total" class:hidden={hideTotal}>
    <div class="lapangan">
        <p>Lapangan</p>
        <p>60.000</p>
    </div>
    <div class="snacks">
        <p>Snacks</p>
        <p>5.000</p>
    </div>
    <hr/>
    <div class="total">
        <p>Total</p>
        <p>65.000</p>
    </div>
    <button>Simpan</button>
</div>




<style lang="scss">
    @import "../styles/theme.scss";

    #snacks-wrapper {
        background-color: white;
        padding: 2.5rem;
        border-radius: 10px;
        margin: 2.5rem 0 2.5rem 0;
        position: relative;

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        animation: fadeIn 1s;

         h1 {
            font-size: 1.5em;
            margin-bottom: 2rem;
            font-family: "Poppins Bold";
        }

        &.hidden {
            display: none;
        }

        #list-snacks {
        height: 32rem;
        border-radius: 2px;
        user-select: none;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }

        .item {
            width: 100%;
            height: 7rem;
            padding: 1.5rem;
            background-color: $fade;
            border-radius: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            transition: .5s;

            &:hover {
                background-color: $green-light;
            }

           .left {
               display: flex;
               flex: 7;

               .info {
                   font-size: 1.2em;
                   padding: 0;
                   margin-left: 1.5rem;
                   display: block;


                   .snack-price {
                       margin-bottom: .3rem;
                       font-family: "Poppins Bold";
                       font-size: 1.2em;
                   }
               }

                img {
                width: 4rem;
                height: 4rem;
            }
           }

            .right {
                flex: 3;
                display: flex;
                justify-content: space-between;
                align-items: center;

                & > i {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 5px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &.decrease {
                        background-color: white;
                    }
                    &.increase {
                        background-color: $green;
                        color: white;
                    }

                    &:hover {
                        transform: scale(1.1);
                    }
                }

                p {
                    font-size: 14px;
                }

            }
            .trash-wrapper {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        border-radius: 5px;
                        background-color: $primary-red;
                        cursor: pointer;
                        color: white;

                        &:hover {
                        transform: scale(1.1);
                    }
            }
        }
    }

    i {
        &.up {
            position: absolute;
            top: 7rem;
            right: 45%;
            color: $green-dark;
            opacity: 0.1;
            transition: .2s ease-in;
            cursor: pointer;
            &:hover {
                opacity: 1;
                transform: scale(1.1);
            }
        }
        &.down {
            color: $green-dark;
            opacity: 0.1;
            transition: .2s ease-in;
            cursor: pointer;
            &:hover {
                opacity: 1;
                transform: scale(1.1);
            }
            position: absolute;
            bottom: 3.5rem;
            right: 45%;
        }
        &.hidden {
            display: none;
        }
    }
    }


        #total {

        width: 100%;
        height: 22rem;
        background-color: white;
        border-radius: 10px;
        margin: 3rem 0 8rem;
        padding: 2.5rem;
        text-align: center;
        user-select: none;

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        animation: fadeIn 1s;

        &.hidden {
            display: none;
        }


        p {
            margin: 0;
            font-size: 1.5em;
        }

        hr {
            border: 0.5px solid rgba(0, 0, 0, 0.8);
            margin-top: 2.5rem;
        }


        .lapangan {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .snacks {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
            font-size: 1.8em;
            font-family: "Poppins Bold";
        }

        }

        button {
            width: 15rem;
            height: 4rem;
            background-color: $green-dark;
            border: none;
            font-family: "Poppins Bold";
            padding: 1rem auto;
            font-size: 1.8rem;
            border-radius: 20px;
            margin-top: 3rem;
            color: white;
            cursor: pointer;
            transition: .2s;

             &:hover {
                transform: scale(1.02);
                opacity: 0.9;
            }


        }
    }

    @media screen and(min-width: 768px) {
        #snacks-wrapper, #total {
            margin: 0;
            min-width: 29rem;

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            &.hidden {
                display: block;
                animation: fadeIn 1s;
            }
        }

        #snacks-wrapper {
            grid-column: 5/8;
            grid-row: 1/6;
            border-radius: 35px 0 0 0;

            #list-snacks {
            height: 32rem;

            .item {

                .left {

                    .info{
                        font-size: 1.1rem;

                        .snack-price{
                            font-size: 1.1rem;
                        }

                    }

                    img {
                        width: 3rem;
                        height: 3rem;
                    }
                }

            }
    }
        }

        #total {
            grid-column: 5/8;
            grid-row: 6/9;
            border-radius: 0 0 0 35px;
            clip-path: inset(0px 0px 0px -5px);

        }

        }

    @media screen and(min-width: 1024px) {

        #snacks-wrapper, #total {
            min-width: 30rem;
        }



        #snacks-wrapper {
            border-radius: 10px;
            margin-bottom: 2.5rem;


            #list-snacks {

                .item {
                    height: 7rem;

                    .left {

                    .info{
                        font-size: 1.3rem;

                        .snack-price{
                            font-size: 1.4rem;
                        }

                    }

                    img {
                        width: 3rem;
                        height: 3rem;
                    }
                }
                }
            }

        }

        #total {
            color: white;
            border-radius: 5px;
            clip-path: unset;
            background-color: $green;

            hr {
                border-color: white;
            }

            button {
                background-color: $green-dark;
                border-radius: 20px;
                width: 17rem;
            }
        }
    }

    @media screen and(min-width: 1280px) {

        #snacks-wrapper, #total {
            min-width: 32rem;
        }

        #snacks-wrapper {
                height: 41rem;

                h1 {
                font-size: 1.6rem;
                }

                #list-snacks {
                    height: 32rem;
                    background-image: radial-gradient($fade, white);

                    .item {
                        background-color: white;
                    }

                }

                i {
                &.down {
                    bottom: 3rem;
                }
            }

        }
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
        #snacks-wrapper {

            i {
                &.down {
                    bottom: 6rem;
                }
            }
        }
    }
    @media screen and (max-width: 1280px) and (min-width: 1024px) {
        #snacks-wrapper {

            i {
                &.down {
                    bottom: 3.5rem;
                }
            }
        }
    }
</style>

