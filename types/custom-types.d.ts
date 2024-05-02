export * from '@spectre/wallet/types/rpc';

import {RPC} from '@spectre/wallet/types/rpc';

export interface SubscriberItem{
  uid:string;
  callback:function;
}

export declare type SubscriberItemMap = Map<string, SubscriberItem[]>;
