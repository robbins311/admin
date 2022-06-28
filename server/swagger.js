const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })


const doc = {
    info: {
        title: '위드네트웍스 홈페이지 API',
        description: '위드네트웍스 관리자 및 홈페이지 api 입니다',
        version: '1.0.0',
    },
    host: 'localhost:5005',
    basePath: '',
    schemas: ['http', 'https'],
    consumes : ['application/json','multipart/form-data'],
    produces: ['application/json', 'multipart/form-data'],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header', // can be 'header', 'query' or 'cookie'
            name: 'authorization', // name of the header, query parameter or cookie
            description: 'Some description...'
          }
        },
    components : {
        parameters : {
            file : {
                name : 'file',
                in: 'formData',
                schema : {
                    type: 'file'
                },
            }
        },
        // securitySchemes: {
        //     bearAuth : {
        //         type : 'http',
        //         scheme : 'bearer',
        //         bearerFormat : 'JWT'
        //     }
        // },
        // security: [{
        //     bearerAuth: [],
        // }]

    }
}
const outputFile = './server/swagger_output.json' // swagger-autogen이 실행 후 생성될 파일 위치와 이름
const endpointsFiles = ['./server/routes/*.js'] // 읽어올 Router가 정의되어 있는 js파일들


swaggerAutogen(outputFile, endpointsFiles, doc);