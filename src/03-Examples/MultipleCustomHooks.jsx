import { LoadingQuote, Quote, ButtonQuote } from "../Components";
import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    const ID = 1;
    const { counter, increment } = useCounter(ID);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
    const {data, isLoading, hasError} = useFetch(url);
	const { author, quote, quote_id:id } = !!data && data[0];

    return (
        <>
            <h1>The Breaking Bad</h1>
            <hr/>
            {
                isLoading ? 
                    <LoadingQuote />
                :
					<Quote quote={quote} author={author} />
            }
            {
                id ?
                    <ButtonQuote booleano={false} increment={increment} />
                :
					<ButtonQuote booleano={true} increment={increment} />
            }
        </>
    )
}