export const ContentBlock = (props) => {
    return (
        <div className="content__article">
            <div className="content__article-row">
                <div className="content__article-title">
                    {props.data.articleTitle}
                </div>
                <div className="content__article-descript">
                    {props.data.articleDescript}
                </div>
                <div className="content__article-elems">
                    <div className="content__elem"></div>
                    <div className="content__elem"></div>
                    <div className="content__elem"></div>
                </div>
            </div>
        </div>
    )
}