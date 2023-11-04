const ObjectData = ({document_data}) => {
    // Notes 
    // 1. You need to have the list of data in a fragment/contain i.e. a div or span tag.
    // 2. When working with js work/fuctions inside the return function you need to 
    // enclose them with {}.
    // 3. Parameter of our constant carrys the data.
    return (
        <div className="objectData">
            <h1>Mashamba</h1>
            <h2>{document_data.pk}. {document_data.name}</h2>
            <h2>Transcriptions</h2>
            <h3>Id: {document_data.transcrption.id}</h3>
            <h3>Area: {document_data.transcrption.area}</h3>
            <h3>Regno: {document_data.transcrption.regno}</h3>
            <h3>Person: {document_data.transcrption.person}</h3>
            <h2>Images</h2>
            <ul>
                {document_data.imag.forEach((image, index) => {
                    <li key={index}>
                        <p>Image Number: {image.num}</p>
                        <p>Image Name: {image.name}</p>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default ObjectData;