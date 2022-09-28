import styled from "styled-components";

const Indexstyle = styled.header`
    main.head-text {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        h1.head-title {
            font-size: calc(80% / 1.3);
            margin: 0;
            color: var(--text-color);
        }
        .textbox {
            width: 700px;
            background-color: #FFFfff;
            height: 600px;
            position: absolute;
            top: 80%;
            margin: 0 auto;
            font-size: 16px;
            display: flex;
            justify-content: center;
            main {
                width: 400px;
                margin-top: 0.7rem;
                display: grid;
                grid-template-columns: 100px 1fr;
            }
            p {
                font-family: 'Inter', sans-serif;
                line-height: 1.5;
            }
        }
    }
`;

export default Indexstyle