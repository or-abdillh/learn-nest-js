import { Controller, Get, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { BodyResponse } from 'dto/body-response.dto';

@Controller('cat')
export class CatController {

    private cats: string[] = ["Garfield", "Tom"]

    @Get()
    index(): BodyResponse {

        return {
            status: true,
            code: HttpStatus.OK,
            message: "OK",
            data: this.cats
        }
    }

    @Get(":index")
    show(@Param("index") index: number): BodyResponse {

        // getting cat by index
        const cat = this.cats[index]

        return {
            status: !!cat,
            message: cat ? "OK" : "Not Found",
            code: cat ? HttpStatus.OK : HttpStatus.NOT_FOUND,
            data: cat
        }
    }
}
