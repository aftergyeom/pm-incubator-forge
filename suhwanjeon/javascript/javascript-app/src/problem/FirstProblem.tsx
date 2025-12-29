//Z가 x보다 크면 Hello, x가 z보다 작거나 같으면 Hi 출력
export const FirstProblem = () => {
    let z = 5;
    let x = 7;
    let result;

    if (z > x) {
        result = "Hello.";
    } else {
        result = "Hi";
    }

    let ternaryResult = z > x? "Hello." : "Hi";

    return (
        <div>
            <h3>JavaScript 제어문_Q1 (if)</h3>
            
            <pre>{
                `
    z = ${z}                           
    result = ${result}              
    ternaryResult = ${ternaryResult}               
                `
            }</pre>
        </div>
    )
}

