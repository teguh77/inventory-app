<script>
    import Left from 'svelte-material-icons/ChevronLeftCircle.svelte'
    import Right from 'svelte-material-icons/ChevronRightCircle.svelte'

    let container;

    const goPrevious = () => {
        sideScroll(container,'left',25,310,20);
    }

    const goNext = () => {
        sideScroll(container,'right',25,310,20);
    }

    const sideScroll = (element,direction,speed,distance,step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}


</script>

<section>
    <ul id="slider-container" bind:this={container}>
        <slot></slot>
    </ul>
    <i on:click={goPrevious} class="prev"><Left size={"3rem"}/></i>
    <i on:click={goNext} class="next"><Right size={"3rem"}/></i>
</section>


<style lang="scss">
    @import "../styles/theme.scss";


    section {
        position: relative;
        height: auto;
        display: grid;
        grid-template-columns: auto;


        i {
            position: absolute;
            color: $green-dark;
            opacity: 0.1;
            transition: .2s ease-in;
            cursor: pointer;
            &:hover {
                opacity: 1;
                transform: scale(1.1);
            }

            &.prev {
                left: 1%;
                top: 40%;
            }
            &.next {
                right: 1%;
                top: 40%;
            }
        }


    }
            #slider-container {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;
            height: auto;
            padding: 1rem 0;
            user-select: none;
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
         }

     @media screen and(min-width: 1280px) {
         section {

            i {
                top: 60%;
            }

            #slider-container {
                background-image: radial-gradient($fade, white);
            }
         }
     }
</style>