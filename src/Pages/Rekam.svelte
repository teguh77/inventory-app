<script>
    import FileEditOutline from 'svelte-material-icons/FileEditOutline.svelte';
    import FormatListText from 'svelte-material-icons/FormatListText.svelte';
    import Lapangan from '../components/Lapangan.svelte';
    import Snacks from '../components/Snacks.svelte';
    import Total from '../components/Total.svelte';


    let hideLapangan = false;
    let hideSnacks = false;
    let hideTotal = true;

    const rekamHandler = () => {
        hideLapangan = false;
        hideSnacks = false;
        hideTotal = true;
    }

    const totalHandler = () => {
        hideLapangan = true;
        hideSnacks = true;
        hideTotal = false;
    }


</script>

<svelte:head>
	<title>Rekam</title>
</svelte:head>

<section>
    <div class="buttons">
            <i class:active={!hideLapangan && !hideSnacks} on:click={rekamHandler}><FileEditOutline size={"2rem"} /></i>
            <i class:active={!hideTotal} on:click={totalHandler}><FormatListText size={"2rem"}/></i>
    </div>
    <Lapangan {hideLapangan}/>
    <Snacks {hideSnacks}/>
    <Total {hideTotal}/>
</section>

<style lang="scss">
    @import "../styles/theme.scss";
    @import "../styles/mixins.scss";
    section {
        padding: 0 3rem 3rem 3rem;
        width: 100%;

        .buttons {
            @include btnGroup;
        }
    }

    @media screen and(min-width: 768px) {
        section {
            background-color: $fade;
            border-radius: 35px 0 0 35px;
            display: grid;
            grid-template-columns: repeat(7, minmax(0, auto));
            grid-template-rows: repeat(8, minmax(0, auto));
            column-gap: 2.5rem;

            padding: 0 0 0 2.5rem;
            .buttons {
                display: none;
            }
        }
    }

    @media screen and(min-width: 1024px) {
        section {
            padding: 3rem 8rem;
        }
    }

    @media screen and(min-width: 1280px) {
        section {
            padding: 4rem 12rem;
            column-gap: 6rem;
            border-radius: 50px 0 0 50px;
        }
    }
</style>


