import { getExceptionMessage } from '../utils/getExceptionMessage.js';
import { writeToStderr } from './log.js'; // ログをSTDERRに出力する関数

// node:fs/promises, fs, path のインポートは不要になるため削除

export class ServerLogger {
  // ログディレクトリやファイルミュテックスは不要になるため削除
  // private readonly _logDirectory: string;
  // private readonly _fileMutexes = new Map<string, Promise<void>>();

  constructor({ logDirectory }: { logDirectory: string }) {
    // ファイルシステム操作はすべて削除し、コンソールに出力する旨のメッセージに置き換える
    console.log(`ServerLogger initialized. Logging to STDOUT/STDERR instead of directory: ${logDirectory}`);
  }

  async log(obj: Record<string, unknown>): Promise<void> {
    // ファイルに書き出す代わりに、STDERRに出力するように変更する
    
    // timestampを追加してJSON形式に変換
    const timestamp = new Date().toISOString();
    const message = JSON.stringify({ timestamp, ...obj });
    
    // STDERRに出力
    // (log.tsで定義されているwriteToStderrを利用)
    writeToStderr(message);
    
    // ミュテックスやファイル操作のロジックはすべて削除する
  }
}
