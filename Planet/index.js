module.exports = async function (context, req) {
    context.log('Planet HTTP trigger function processed a request.');

    const data = {
        1: 'Tatooine',
        2: 'Alderaan',
        3: 'Hoth'
    }

    const id = context.bindingData.id;
    const responseMessage = id && data[id]
        ? data[id]
        : "Please provide a valid ID";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}