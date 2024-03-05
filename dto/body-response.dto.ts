import { HttpStatus } from "@nestjs/common"

export class BodyResponse {
    status: boolean
    message: string
    code: HttpStatus
    data?: any
    error?: any
}