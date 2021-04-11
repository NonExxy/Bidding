//need to append comment into comment section
localStorage.setItem('topBid', 0);
$('.topBid').innerHTML = localStorage.topBid;

$('#bidder1').on('click', '.submit', function(e) {
    e.preventDefault();
    if (localStorage.topBid == 0 || $('.bidinput2').val() > localStorage.topBid) {
        $('#bidSection').prepend('<div class="bid1"> <div class="bidderBar"> <h4>' + $(".displayName1").val() + '</h4> <div class="userButtons"> <i class="bi bi-x-square deleteButton1"></i> </div> </div> <p class="content">' + $(".bidInput1").val() + '</p> </div>');
    } else {
        alert('Please make sure your bid is greater than the top bid')
    }
    
});
$('#bidder2').on('click', '.submit', function(e) {
    e.preventDefault();
    if (localStorage.topBid == 0 || $('.bidinput2').val() > localStorage.topBid) {
        $('#bidSection').prepend('<div class="bid2"> <div class="bidderBar"> <h4>' + $(".displayName2").val() + '</h4> <div class="userButtons"> <i class="bi bi-x-square deleteButton2"></i> </div> </div> <p class="content">' + $(".bidInput2").val() + '</p> </div>');
    } else {
        alert('Please make sure your bid is greater than the top bid')
    }
});

//when edit button is hit, need a small text input and submit button in same div as comment, deletes self when submitted
$('#bid1').on('click', '.deleteButton1', function() {
    let bidContainer = $(this).parentsUntil('#bidSection');
    $(bidContainer).remove();
});
$('#bid2').on('click', '.deleteButton2', function() {
    let bidContainer = $(this).parentsUntil('#bidSection');
    $(bidContainer).remove();
});