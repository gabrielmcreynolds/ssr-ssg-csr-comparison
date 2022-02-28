import {GetServerSideProps, GetStaticProps} from "next";
import {Post} from "../types/post";

const ServerSideRendering = ({post}: { post: Post }) => {
    return (
        <div>
            <p>{JSON.stringify(post)}</p>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json: Post = await result.json();

    return {
        props: {
            post: json
        },
    }
}

export default ServerSideRendering;
