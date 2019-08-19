import { assert } from "chai";
import { Meteor } from "meteor/meteor";

describe("Posts", function() {
    it("should be able to return a post", function() {
        Meteor.call(
            "post.create",
            {
                title: "Post test",
                description: "Post test desc"
            },
            (err, result) => {
                console.log(result);
                assert.isOk(result, "everything is okay");
            }
        );
    });
});
