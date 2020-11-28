<script>
    import Left from 'svelte-material-icons/ChevronLeftCircle.svelte';
    import Right from 'svelte-material-icons/ChevronRightCircle.svelte';
</script>

<div class="pagination">
    <div class="nav">
        <i><Left size={"3.5rem"}/></i>
        <span>
            1 / 50
        </span>
        <i><Right size={"3.5rem"}/></i>
    </div>
</div>

<style lang="scss">
    @import "../styles/theme.scss";

            .pagination {
            margin-top: 3rem;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                    padding: 0 2.5rem;
                    font-size: 1.5rem;
                    letter-spacing: 1.5px;
                }
                i {
                    color: $green-dark;
                    opacity: 0.5;
                    transition: .2s ease-in;
                    cursor: pointer;
                    &:hover {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                }
            }
        }
</style>