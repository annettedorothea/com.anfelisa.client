/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */




import AbstractImportCsvCommand from "../../../gen/category/commands/AbstractImportCsvCommand";
import * as AppState from "../../../gen/ace/ReadAppState";

export default class ImportCsvCommand extends AbstractImportCsvCommand {

    initCommandData() {
        const previewCsv = AppState.get_state_State_data_AuthorView_categoryTree_CategoryTree_previewCsv();
        this.commandData.previewCsv = [];
        previewCsv.forEach(row => {
            this.commandData.previewCsv.push({
                given: row[0],
                wanted: row[1],
                id: row[2]
            });
        });
        this.commandData.categoryId = AppState.get_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory().categoryId;
    	return true;
    }

    handleResponse(resolve) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}




/******* S.D.G. *******/


