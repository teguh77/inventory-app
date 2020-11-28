<script>
    export let hideLapangan = false;


</script>


<section class:hidden={hideLapangan} id="lapangan">
    <div class="left">
        <h1>Lapangan</h1>
        <div class="img-wrapper">
            <img src="assets/img/finance.svg" alt="finance">
        </div>
    </div>
    <form class="right">
            <div class=" column-1">
                <label for="lama permainan">Lama Permainan</label>
                <div class="wrapper">
                    <select name="lama permainan" id="lama permainan">
                        <option value="0.25">1/4</option>
                        <option value="0.5">1/2</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <span>jam</span>
                </div>
            </div>
            <div class="column-2">
                <label for="jumlah lapangan">Jumlah Lapangan</label>
                <input type="number" id="jumlah lapangan" min="1" max="3">
            </div>
            <div class="column-3">
                <label for="total sewa">Total Sewa</label>
                <input type="number" id="total sewa" disabled style="background-color:white;">
            </div>
            <button>Checkout</button>
        </form>
</section>

<style lang="scss">
    @import '../styles/theme.scss';
    section {
        width: 100%;
        margin: 2.5rem 0;
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 2.5rem;
        position: relative;
        background-color: white;
        padding: 2.5rem;
        border-radius: 10px;
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        animation: fadeIn 1s;


        &.hidden {
            display: none;
        }


        .left {

            h1 {
                font-size: 1.5em;
                font-family: "Poppins Bold";
            }

            .img-wrapper {
                height: 70%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }

        .right {
            display: grid;
            grid-template-rows: auto auto auto;
            justify-content: space-between;
            row-gap: 2rem;
            width: 100%;

            select, input {
                border: none;
                height: 4rem;
                background-color: $fade !important;
                font-size: 1.2rem;
                padding: 0 1rem;
                border-radius: 20px;

                &:focus {
                    border-bottom: 1px solid $green;
                }
            }

            label, input {
                width: 100%;
            }

            label {
                font-size: 1.2rem;
            }


            .column-1 {

                .wrapper {
                    display: flex;

                    select {
                    width: 60%;
                    border-radius: 20px 0 0 20px;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    background: url('data:image/svg+xml;utf-8,<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.95834 6.72919L8.50001 10.2709L12.0417 6.72919H4.95834Z" fill="black"/></svg>') no-repeat calc(100% - 1px) white;

                    &::-ms-expand {
                        display: none;
                    }
                }

                span {
                    width: 40%;
                    height: 4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0 20px 20px 0;
                    background-color: $fade;
                    font-size: 1.2rem;
                }

                }

            }





            button {
                position: absolute;
                left: 2.5rem;
                bottom: 3rem;
                border: none;
                color: white;
                font-size: 1.4em;
                background-color: $green-dark;
                width: 10rem;
                height: 4rem;
                border-radius: 20px;
                padding: .5rem auto;
                cursor: pointer;
                transition: .2s;

                 &:hover {
                    opacity: .8;
                    transform: scale(1.05);
                }
            }

        }

    }

    @media screen and(min-width: 768px) {
        section {
            grid-column: 1/5;
            grid-row: 1/5;
            margin-bottom: 0;
            border-radius: 10px;

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            &.hidden {
                display: grid;
                animation: fadeIn 1s;
            }

            .right {

                input, select {
                    padding: 0 2rem;
                }
            }
        }
    }

    @media screen and(min-width: 878px) {
        #lapangan {

            .left {

                .img-wrapper {
                display: grid;
                grid-template-columns: auto;
                justify-content: center;
                align-items: center;

                img {
                    transform: scale(0.9);
                }
                }
            }


        }
    }

    @media screen and(min-width: 1024px) {
        #lapangan {
            margin-top: 0;

            .right {

                input, select {
                    background-color: white !important;
                    border-bottom: 1px solid $green;
                    outline: none;
                    border-radius: 0px;
                }

                .column-1 {

                    select {
                        border-radius: 0;
                    }
                    span {
                    background-color: white !important;
                    border-bottom: 1px solid $green;
                    border-radius: 0px;

                        color: $green;

                    }
                }


                button {
                    width: 11rem;
                    border-radius: 20px;
                }
            }
        }
    }

    @media screen and(min-width: 1280px) {
        #lapangan {

            .left {
                h1 {
                font-size: 1.6rem;
            }
            }

            .right {

                input, select {
                    padding: 1rem 2rem;
                    font-size: 1.4rem;
                    font-weight: bold;
                }

                label {
                    font-size: 1.4rem;
                }



                button {
                    width: 11rem;
                    border-radius: 20px;
                }
            }

        }
    }

</style>