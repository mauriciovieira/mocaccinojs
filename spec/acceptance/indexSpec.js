describe('On index', function() {
  var window;
  useBrowser(function() { window = this.window; });

  it('window to be a object', function() {
    expect(window).to.be.a('object');
  });
});
