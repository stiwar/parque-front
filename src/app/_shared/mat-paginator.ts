
import { MatPaginatorIntl } from '@angular/material';

export class MatPaginatorImpl extends MatPaginatorIntl {
<<<<<<< HEAD
    itemsPerPageLabel = 'Elementos por página';
=======
    itemsPerPageLabel = 'Items por página';
>>>>>>> 8df64a2b739be36a580cd22b8c8c33ba59437c96
    nextPageLabel = 'Siguiente';
    previousPageLabel = 'Atrás';

    getRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return '0 de ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;

        const endIndex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize;
        return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };

}