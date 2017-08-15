function makeArrayConsecutive2(statues) {
    let min = Math.min.apply(null, statues);
    let max = Math.max.apply(null, statues);
    return (max - min) - (statues.length - 1)
}
