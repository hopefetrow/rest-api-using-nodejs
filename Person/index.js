module.exports = async function (context, req) {
    context.log('Person HTTP trigger function processed a request.');

    const data = {
        1: 'Darth Vader',
        2: 'Luke Skywalker',
        3: 'Leia Organa'
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