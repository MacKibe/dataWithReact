export default function ArraysData() {
    // 
    // This working with simple arrarys.
    const category_data = 
    [
        {
            "pk": 1,
            "name": "mutation",
            "documents": 978
        }, 
        {
            "pk": 2,
            "name": "certificate of title",
            "documents": 1
        }, 
        {
            "pk": 3,
            "name": "title deed",
            "documents": 742
        }, 
        {
            "pk": 4,
            "name": "certificate of lease",
            "documents": 3
        }, 
        {
            "pk": 5,
            "name": "NULL",
            "documents": 8
        }, 
        {
            "pk": 12,
            "name": "LAND CERTIFICATE",
            "documents": 3
        }, 
        {
            "pk": 14,
            "name": "blank",
            "documents": 14
        }, 
        {
            "pk": 15,
            "name": "ID",
            "documents": 1
        }, 
        {
            "pk": 16,
            "name": "MISC",
            "documents": 4
        }, 
        {
            "pk": 17,
            "name": "NOT VISIBLE",
            "documents": 2
        }, 
        {
            "pk": 18,
            "name": "OTHER",
            "documents": 2
        }, 
        {
            "pk": 19,
            "name": "OTHERS",
            "documents": 5
        }
    ];    
    category_data.map( c_data => console.log(c_data));

    // Notes 
    // 1. You need to have the list of data in a fragment/contain i.e. a div or span tag
    // 2. When working with js work/fuctions inside the return function you need to 
    // enclose them with {}
    return category_data.map( c_data =>
        <div>
            {c_data.pk}.{c_data.name}.({c_data.documents})
        </div>
    );
}