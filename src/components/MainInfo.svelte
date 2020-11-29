<script>
    import Account from "svelte-material-icons/Account.svelte";

</script>

<div class="main-info">
    <img src="assets/icon/leaf.jpg" alt="main-logo" >
    <i><Account size={"2.5rem"}/></i>
</div>

<style lang="scss">
    @import "../styles/theme.scss";

    .main-info {
        width: 100%;
        padding: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 102;

        img {
            width: 4rem;
            height: 4rem;
        }

        i {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3.5rem;
            height: 3.5rem;
            background-color: $green;
            color: $green-dark;
            border-radius: 10px;



        }
    }

    @media screen and(min-width: 768px) {
        .main-info {
            position: absolute;



            img {
                position: fixed;
                left: 1rem;
                top: 2rem;
            }

            i {
                position: fixed;
                left: 1.3rem;
                bottom: calc(100vh - 66rem);
            }
        }
    }

    @media screen and(min-width: 1024px) {
        .main-info {
            img {
                left: 1.4rem;
                top: 2rem;
            }
             i {
                left: 1.8rem;
                bottom: calc(100vh - 67rem);
            }
        }
    }

</style>