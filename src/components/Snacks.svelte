<script>
    export let hideSnacks = false;
    import Magnify from 'svelte-material-icons/Magnify.svelte';

    import SliderWrapper from '../shared/SilderWrapper.svelte';

</script>


<section class:hidden={hideSnacks}>
    <div class="top-area">
        <h1>Snacks</h1>
        <form>
            <input type="text" placeholder="cari">
            <i><Magnify size={"2rem"}/></i>
        </form>
    </div>
<SliderWrapper>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
        <li class="slider-item">
            <img src="assets/img/tea.svg" alt="tea">
            <div class="snack-title">Aqua Besar</div>
            <div class="snack-price">5.000</div>
            <button>Checkout</button>
        </li>
</SliderWrapper>
</section>

<style lang="scss">
    @import '../styles/theme.scss';
    section {
        background-color: white;
        padding: 2.5rem;
        border-radius: 10px;
        margin-bottom: 8rem;
        width: 100%;
        display: grid;
        grid-template-rows: 4rem 20rem;
        row-gap: 2.5rem;

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        animation: fadeIn 1s;

        &.hidden {
            display: none;
        }

        .top-area {
            display: flex;
            justify-content: space-between;
            position: relative;

            h1 {
                font-size: 1.5em;
                font-family: "Poppins Bold";
            }

            input {
                border: none;
                height: 4rem;
                background-color: $fade;
                font-size: 1.4rem;
                padding: 0rem 1rem;
                border-radius: 20px;
                &:focus {
                    border-bottom: 1px solid $green;
                }
            }

            i {
                position: absolute;
                top: 1rem;
                right: 1rem;
                color: $icon-grey;
                cursor: pointer;
            }
        }

        .slider-item {
            flex: 0 0 15rem;
            margin-right: 1rem;
            height: 17rem;
            padding: 1.5rem;
            background-color: white;
            box-shadow: 0px 2px 7px #e6e6e6;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            font-size: 1.1rem;

            img {

                width: 50%;
                height: 50%;
            }

            .snack-title {
                font-family: "Poppins Bold";
            }

            button {
                border: none;
                color: white;
                font-size: 1.1rem;
                background-color: $green-dark;
                width: 8rem;
                height: 3rem;
                border-radius: 15px;
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
            grid-row: 5/9;
            margin: 2.5rem 0;
            border-radius: 10px;

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            &.hidden {
                display: block;
                animation: fadeIn 1s;
            }
        }
    }

    @media screen and(min-width: 1024px) {
        section {
            margin-bottom: 0;

            .top-area {

                    form {
                        input {
                        background-color: white;
                        border-radius: 0px;
                        border-bottom: 1px solid $green;

                    }
                }
            }

        }
    }

    @media screen and(min-width: 1280px) {
        section {
            grid-template-rows: 4rem 25rem;

            .top-area {
                h1 {
                font-size: 1.6rem;
            }
            }

            .slider-item {
                flex: 0 0 20rem;
                height: 22rem;
                margin-right: 1.5rem;
                transition: .3s;
                box-shadow: none;

                font-size: 1.4rem;

                &:hover {
                    transform: scale(1.05);
                    opacity: 0.8;

                }

                button {
                    width: 9rem;
                }

            }


        }
    }

</style>