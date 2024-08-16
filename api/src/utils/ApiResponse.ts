class ApiResponse {
    data: any;
    message: string;
    statusCode: number;
    success: boolean;

    constructor(data: any, statusCode: number, message: string = "success") {
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
        this.success = statusCode < 400;
    }
}

export { ApiResponse };