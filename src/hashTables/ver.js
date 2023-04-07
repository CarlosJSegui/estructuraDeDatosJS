getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
    if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
        keys.push(this.data[i][j][0]);
        }
    }
    }
    return keys;
}

keys() {
    const keys = [];
    this.data.forEach((bucket) => {
      bucket.forEach((keyPairValues) => {
        keys.push(keyPairValues[0]);
      });
    });
    return keys;
  }

  getAllKeys(){
    const allKeys = [];
    for (let i = 0; i < this.data.length; i++){
      if (this.data[i]) {
        const currentBucket = this.data[i];
        for (let j = 0; j < currentBucket.length;j++)
          allKeys.push(currentBucket[j][0]);
      }
    }
    return allKeys;
  }> 