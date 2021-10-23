import {createAsyncThunk} from "@reduxjs/toolkit";
import {downloadFile} from "../api/files.api";
import {blobToFileDownload} from "../utils/files.utils";
import {DownloadFileThunkParams} from "../store/thunks/download.thunk";
import {getHostAddress} from "../utils/http.utils";
import axios from "axios";
import {Observable} from "rxjs";
import {httpService} from "./http.service";


export type AppFileType = 'valheim' | 'quake-cpma' | string;

export interface AppFileTree {
    optional: AppFileList
    required: AppFileList
}

export interface AppFileList {
    [key: string]: { size: number }
}





const service = new class DownloadsService {
    private readonly STATE = {

    };


    loadFileList(type: AppFileType) {
        const url = `${ httpService.getHostAddress() }/files/list`;

        return axios.get<AppFileTree>(url, {
            params: { type }
        }).then(response => response.data);
    }

    downloadFile(fileUri: string) : Observable<Blob> {
        const buffer = await downloadFile(uri);

        const url = `${ httpService.getHostAddress() }/files/download`;

        return axios.get<ArrayBuffer>(url, {
            params: { fileName: fileUri },
            responseType: 'blob'
        }).then(response => {
            return response.data;
        });


        blobToFileDownload(new Blob([buffer]), name);
    }
}

export {service as downloadsService};
