remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
                const element = currentBucket[i][1];
                delete currentBucket[i][1];
                return element;
            }
        }
    }
    return undefined;
}

remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
    for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
        const deletedValue = this.data[address][i];
        this.data[address].splice(i, 1);
        return deletedValue;
        }
    }
    }
    return undefined;
}

delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const value = currentBucket[i];
          currentBucket.splice(i, 1);
          return value;
        }
      }
    }
    return undefined;
  }

  <delete(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const item = currentBucket[i];
          console.log(item);
          for (let j = i; j < currentBucket.length; j++){
            currentBucket[j] = currentBucket[j+1];
          }
          if (currentBucket.length>1){
            delete currentBucket[currentBucket.length - 1];
            currentBucket.length--;
          } else{
            delete this.data[address];
          }
          return item;      
        }
      }
    } else{
        console.log(currentBucket);
        return currentBucket;
    }
  }