import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export enum StorageKey {
  USER_DATA = 'user_data',
  AUTH_TOKEN = 'auth_token',
  DEVICE_TOKEN = 'device_token',
  MEDIA = 'media',
  ATTACHMENTS = 'attachments',
  ACTIVE_RIDE = 'active_ride',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {
    this.storage.create();
  }

  async getData(key: StorageKey) {
    return await this.storage.get(key);
  }

  async setData(key: StorageKey, data: any) {
    return await this.storage.set(key, data);
  }

  async clearData(key: StorageKey) {
    return await this.storage.remove(key);
  }

  async purgeData() {
    return await this.storage.clear();
  }

  // async readFile(imgEntry: string): Promise<Blob> {
  //   return new Promise<Blob>(async (res, err) => {
  //     const entry = (await this.file.resolveLocalFilesystemUrl(
  //       imgEntry
  //     )) as FileEntry;
  //     entry.file((file) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         const imgBlob = new Blob([reader.result], {
  //           type: file.type,
  //         });
  //         res(imgBlob);
  //       };
  //       reader.readAsArrayBuffer(file);
  //     });
  //   });
  // }

  // async copyFileToLocalDir(
  //   namePath,
  //   currentName,
  //   newFileName
  // ): Promise<string> {
  //   return new Promise<string>((res, err) => {
  //     this.file
  //       .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
  //       .then(
  //         (success) => {
  //           res(this.getFullImagePath(newFileName));
  //         },
  //         (error) => {
  //           err(error);
  //         }
  //       );
  //   });
  // }

  // getFullImagePath(name) {
  //   const filePath = this.file.dataDirectory + name;
  //   return filePath;
  // }

  getTempFileName() {
    return new Date().valueOf();
  }
}
